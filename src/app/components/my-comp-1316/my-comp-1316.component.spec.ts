import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1316Component } from './my-comp-1316.component';

describe('MyComp1316Component', () => {
  let component: MyComp1316Component;
  let fixture: ComponentFixture<MyComp1316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
