import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp295Component } from './my-comp-295.component';

describe('MyComp295Component', () => {
  let component: MyComp295Component;
  let fixture: ComponentFixture<MyComp295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
