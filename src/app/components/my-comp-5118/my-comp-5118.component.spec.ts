import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5118Component } from './my-comp-5118.component';

describe('MyComp5118Component', () => {
  let component: MyComp5118Component;
  let fixture: ComponentFixture<MyComp5118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
