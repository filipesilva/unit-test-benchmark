import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp432Component } from './my-comp-432.component';

describe('MyComp432Component', () => {
  let component: MyComp432Component;
  let fixture: ComponentFixture<MyComp432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
