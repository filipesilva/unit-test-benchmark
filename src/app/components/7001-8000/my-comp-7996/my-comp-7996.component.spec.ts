import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7996Component } from './my-comp-7996.component';

describe('MyComp7996Component', () => {
  let component: MyComp7996Component;
  let fixture: ComponentFixture<MyComp7996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
