import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7172Component } from './my-comp-7172.component';

describe('MyComp7172Component', () => {
  let component: MyComp7172Component;
  let fixture: ComponentFixture<MyComp7172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
