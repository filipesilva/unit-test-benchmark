import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5565Component } from './my-comp-5565.component';

describe('MyComp5565Component', () => {
  let component: MyComp5565Component;
  let fixture: ComponentFixture<MyComp5565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
