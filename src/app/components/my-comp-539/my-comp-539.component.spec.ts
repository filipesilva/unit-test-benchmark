import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp539Component } from './my-comp-539.component';

describe('MyComp539Component', () => {
  let component: MyComp539Component;
  let fixture: ComponentFixture<MyComp539Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp539Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
