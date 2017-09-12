import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5508Component } from './my-comp-5508.component';

describe('MyComp5508Component', () => {
  let component: MyComp5508Component;
  let fixture: ComponentFixture<MyComp5508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
