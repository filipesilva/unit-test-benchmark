import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2979Component } from './my-comp-2979.component';

describe('MyComp2979Component', () => {
  let component: MyComp2979Component;
  let fixture: ComponentFixture<MyComp2979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
