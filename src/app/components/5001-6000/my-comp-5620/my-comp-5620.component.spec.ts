import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5620Component } from './my-comp-5620.component';

describe('MyComp5620Component', () => {
  let component: MyComp5620Component;
  let fixture: ComponentFixture<MyComp5620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
