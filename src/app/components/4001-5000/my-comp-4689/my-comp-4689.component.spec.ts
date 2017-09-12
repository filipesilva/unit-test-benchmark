import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4689Component } from './my-comp-4689.component';

describe('MyComp4689Component', () => {
  let component: MyComp4689Component;
  let fixture: ComponentFixture<MyComp4689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
