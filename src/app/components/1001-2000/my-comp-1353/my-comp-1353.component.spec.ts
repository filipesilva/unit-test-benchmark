import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1353Component } from './my-comp-1353.component';

describe('MyComp1353Component', () => {
  let component: MyComp1353Component;
  let fixture: ComponentFixture<MyComp1353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
