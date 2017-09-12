import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6816Component } from './my-comp-6816.component';

describe('MyComp6816Component', () => {
  let component: MyComp6816Component;
  let fixture: ComponentFixture<MyComp6816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
