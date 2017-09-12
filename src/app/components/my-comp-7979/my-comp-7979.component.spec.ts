import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7979Component } from './my-comp-7979.component';

describe('MyComp7979Component', () => {
  let component: MyComp7979Component;
  let fixture: ComponentFixture<MyComp7979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
