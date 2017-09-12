import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5180Component } from './my-comp-5180.component';

describe('MyComp5180Component', () => {
  let component: MyComp5180Component;
  let fixture: ComponentFixture<MyComp5180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
