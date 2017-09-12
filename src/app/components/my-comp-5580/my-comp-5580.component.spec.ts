import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5580Component } from './my-comp-5580.component';

describe('MyComp5580Component', () => {
  let component: MyComp5580Component;
  let fixture: ComponentFixture<MyComp5580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
