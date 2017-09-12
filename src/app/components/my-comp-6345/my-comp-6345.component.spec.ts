import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6345Component } from './my-comp-6345.component';

describe('MyComp6345Component', () => {
  let component: MyComp6345Component;
  let fixture: ComponentFixture<MyComp6345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
