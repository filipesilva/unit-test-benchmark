import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1242Component } from './my-comp-1242.component';

describe('MyComp1242Component', () => {
  let component: MyComp1242Component;
  let fixture: ComponentFixture<MyComp1242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
