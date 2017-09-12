import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp973Component } from './my-comp-973.component';

describe('MyComp973Component', () => {
  let component: MyComp973Component;
  let fixture: ComponentFixture<MyComp973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
