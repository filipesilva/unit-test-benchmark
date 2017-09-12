import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4845Component } from './my-comp-4845.component';

describe('MyComp4845Component', () => {
  let component: MyComp4845Component;
  let fixture: ComponentFixture<MyComp4845Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4845Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
