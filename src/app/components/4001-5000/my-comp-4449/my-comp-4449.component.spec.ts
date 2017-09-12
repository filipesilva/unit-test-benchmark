import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4449Component } from './my-comp-4449.component';

describe('MyComp4449Component', () => {
  let component: MyComp4449Component;
  let fixture: ComponentFixture<MyComp4449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
