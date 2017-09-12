import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5575Component } from './my-comp-5575.component';

describe('MyComp5575Component', () => {
  let component: MyComp5575Component;
  let fixture: ComponentFixture<MyComp5575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
