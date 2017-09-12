import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9363Component } from './my-comp-9363.component';

describe('MyComp9363Component', () => {
  let component: MyComp9363Component;
  let fixture: ComponentFixture<MyComp9363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
