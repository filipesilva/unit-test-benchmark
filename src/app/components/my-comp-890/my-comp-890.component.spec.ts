import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp890Component } from './my-comp-890.component';

describe('MyComp890Component', () => {
  let component: MyComp890Component;
  let fixture: ComponentFixture<MyComp890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
