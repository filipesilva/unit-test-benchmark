import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp823Component } from './my-comp-823.component';

describe('MyComp823Component', () => {
  let component: MyComp823Component;
  let fixture: ComponentFixture<MyComp823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
