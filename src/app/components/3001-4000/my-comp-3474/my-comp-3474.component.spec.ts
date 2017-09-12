import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3474Component } from './my-comp-3474.component';

describe('MyComp3474Component', () => {
  let component: MyComp3474Component;
  let fixture: ComponentFixture<MyComp3474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
