import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp580Component } from './my-comp-580.component';

describe('MyComp580Component', () => {
  let component: MyComp580Component;
  let fixture: ComponentFixture<MyComp580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
