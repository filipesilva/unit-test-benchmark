import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp996Component } from './my-comp-996.component';

describe('MyComp996Component', () => {
  let component: MyComp996Component;
  let fixture: ComponentFixture<MyComp996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
