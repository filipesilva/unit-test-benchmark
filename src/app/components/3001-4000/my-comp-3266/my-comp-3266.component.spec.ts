import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3266Component } from './my-comp-3266.component';

describe('MyComp3266Component', () => {
  let component: MyComp3266Component;
  let fixture: ComponentFixture<MyComp3266Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3266Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
