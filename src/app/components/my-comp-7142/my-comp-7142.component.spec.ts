import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7142Component } from './my-comp-7142.component';

describe('MyComp7142Component', () => {
  let component: MyComp7142Component;
  let fixture: ComponentFixture<MyComp7142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
