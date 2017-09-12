import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp903Component } from './my-comp-903.component';

describe('MyComp903Component', () => {
  let component: MyComp903Component;
  let fixture: ComponentFixture<MyComp903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
