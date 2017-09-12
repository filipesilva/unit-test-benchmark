import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5449Component } from './my-comp-5449.component';

describe('MyComp5449Component', () => {
  let component: MyComp5449Component;
  let fixture: ComponentFixture<MyComp5449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
