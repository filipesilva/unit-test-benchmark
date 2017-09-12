import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6555Component } from './my-comp-6555.component';

describe('MyComp6555Component', () => {
  let component: MyComp6555Component;
  let fixture: ComponentFixture<MyComp6555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
