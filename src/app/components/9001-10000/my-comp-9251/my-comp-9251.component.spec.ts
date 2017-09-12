import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9251Component } from './my-comp-9251.component';

describe('MyComp9251Component', () => {
  let component: MyComp9251Component;
  let fixture: ComponentFixture<MyComp9251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
