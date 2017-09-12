import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp363Component } from './my-comp-363.component';

describe('MyComp363Component', () => {
  let component: MyComp363Component;
  let fixture: ComponentFixture<MyComp363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
