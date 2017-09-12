import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7884Component } from './my-comp-7884.component';

describe('MyComp7884Component', () => {
  let component: MyComp7884Component;
  let fixture: ComponentFixture<MyComp7884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
