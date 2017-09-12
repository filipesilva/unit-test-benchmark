import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp42Component } from './my-comp-42.component';

describe('MyComp42Component', () => {
  let component: MyComp42Component;
  let fixture: ComponentFixture<MyComp42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
