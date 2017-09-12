import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1721Component } from './my-comp-1721.component';

describe('MyComp1721Component', () => {
  let component: MyComp1721Component;
  let fixture: ComponentFixture<MyComp1721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
