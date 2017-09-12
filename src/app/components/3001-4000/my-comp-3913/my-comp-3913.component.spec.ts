import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3913Component } from './my-comp-3913.component';

describe('MyComp3913Component', () => {
  let component: MyComp3913Component;
  let fixture: ComponentFixture<MyComp3913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
