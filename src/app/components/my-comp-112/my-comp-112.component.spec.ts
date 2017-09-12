import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp112Component } from './my-comp-112.component';

describe('MyComp112Component', () => {
  let component: MyComp112Component;
  let fixture: ComponentFixture<MyComp112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
