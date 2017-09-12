import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4798Component } from './my-comp-4798.component';

describe('MyComp4798Component', () => {
  let component: MyComp4798Component;
  let fixture: ComponentFixture<MyComp4798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
