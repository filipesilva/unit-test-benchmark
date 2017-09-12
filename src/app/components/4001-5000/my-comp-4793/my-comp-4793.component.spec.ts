import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4793Component } from './my-comp-4793.component';

describe('MyComp4793Component', () => {
  let component: MyComp4793Component;
  let fixture: ComponentFixture<MyComp4793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
