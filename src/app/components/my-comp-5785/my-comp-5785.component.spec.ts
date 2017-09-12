import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5785Component } from './my-comp-5785.component';

describe('MyComp5785Component', () => {
  let component: MyComp5785Component;
  let fixture: ComponentFixture<MyComp5785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
