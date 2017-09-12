import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2942Component } from './my-comp-2942.component';

describe('MyComp2942Component', () => {
  let component: MyComp2942Component;
  let fixture: ComponentFixture<MyComp2942Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2942Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
