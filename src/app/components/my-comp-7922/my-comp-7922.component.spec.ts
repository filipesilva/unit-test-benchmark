import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7922Component } from './my-comp-7922.component';

describe('MyComp7922Component', () => {
  let component: MyComp7922Component;
  let fixture: ComponentFixture<MyComp7922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
