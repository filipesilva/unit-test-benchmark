import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4043Component } from './my-comp-4043.component';

describe('MyComp4043Component', () => {
  let component: MyComp4043Component;
  let fixture: ComponentFixture<MyComp4043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
