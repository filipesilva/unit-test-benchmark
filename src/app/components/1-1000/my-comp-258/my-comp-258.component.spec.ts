import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp258Component } from './my-comp-258.component';

describe('MyComp258Component', () => {
  let component: MyComp258Component;
  let fixture: ComponentFixture<MyComp258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
