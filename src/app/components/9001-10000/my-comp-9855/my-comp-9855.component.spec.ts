import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9855Component } from './my-comp-9855.component';

describe('MyComp9855Component', () => {
  let component: MyComp9855Component;
  let fixture: ComponentFixture<MyComp9855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
