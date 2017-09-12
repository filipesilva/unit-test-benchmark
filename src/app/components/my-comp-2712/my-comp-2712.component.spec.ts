import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2712Component } from './my-comp-2712.component';

describe('MyComp2712Component', () => {
  let component: MyComp2712Component;
  let fixture: ComponentFixture<MyComp2712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
