import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp250Component } from './my-comp-250.component';

describe('MyComp250Component', () => {
  let component: MyComp250Component;
  let fixture: ComponentFixture<MyComp250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
