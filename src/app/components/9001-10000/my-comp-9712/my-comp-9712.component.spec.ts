import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9712Component } from './my-comp-9712.component';

describe('MyComp9712Component', () => {
  let component: MyComp9712Component;
  let fixture: ComponentFixture<MyComp9712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
