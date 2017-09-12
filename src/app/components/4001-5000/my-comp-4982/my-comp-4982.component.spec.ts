import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4982Component } from './my-comp-4982.component';

describe('MyComp4982Component', () => {
  let component: MyComp4982Component;
  let fixture: ComponentFixture<MyComp4982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
