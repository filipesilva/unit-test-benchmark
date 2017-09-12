import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4742Component } from './my-comp-4742.component';

describe('MyComp4742Component', () => {
  let component: MyComp4742Component;
  let fixture: ComponentFixture<MyComp4742Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4742Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
